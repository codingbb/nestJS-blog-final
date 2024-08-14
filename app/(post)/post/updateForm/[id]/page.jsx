"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useAuth } from "../../../../util/AuthContext";
import axios from "axios";

// SSR 시 react-quill을 제외하기 위해 동적 import
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

export default function UpdateForm({ params }) {
  // const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]); // 카테고리 리스트 상태
  const [selectedCategory, setSelectedCategory] = useState(""); // 선택한 카테고리 상태
  const { user } = useAuth();
  const userId = user && user.body[0].id;
  // console.log("param 111= " + JSON.stringify(params));
  const postId = params.id; // == const { postId } = params;
  // console.log("postId id id " + postId);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState(null);

  // const [formData, setFormData] = useState({
  //   selectedCategory: "",
  //   title: "",
  //   content: "",
  //   userId: userId,
  //   file: null,
  // });

  // 카테고리 선택
  useEffect(() => {
    const categoryList = async () => {
      // e.preventDefault();

      try {
        const res = await axios.get("/api/category/list", {
          params: { userId }, // 쿼리 파라미터로 userId 전달
        });

        if (res.status === 200) {
          setCategories(res.data.body); // API 응답의 데이터를 상태로 저장 (배열 다 저장)
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        }
      }
    };

    if (userId) {
      categoryList();
    }
  }, [userId]);

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, selectedCategory: e.target.value });
    // setSelectedCategory(e.target.value); // 사용자가 선택한 카테고리 저장
  };
  // 카테고리 선택 끝

  // 글 선택
  useEffect(() => {
    const postById = async () => {
      // e.preventDefault();

      console.log("p11111111111");

      try {
        const res = await axios.get(`/api/post/updateForm/${postId}`, {
          // postId,
          params: { postId },
        });

        console.log("p222222222222");

        if (res.status === 200) {
          console.log(
            "res.data.body 확인용!! = " + JSON.stringify(res.data.body)
          );

          const postData = res.data.body[0];
          // setTitle(postData.title);
          // setContent(postData.content);
          // setSelectedCategory(postData.category_id);

          // formData 객체에 state 값 추가하는 방식으로 진행
          setFormData({
            selectedCategory: postData.category_id,
            title: postData.title,
            content: postData.content,
            userId: userId,
            file: null,
          });
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        }
      }
    };
    postById();
  }, [postId]);

  // formData가 null이면 로딩 중 표시
  if (formData === null) {
    return <p>Loading...</p>;
  }

  const handlePostChange = (e) => {
    // setSelectedCategory(e.target.value); // 사용자가 선택한 카테고리 저장
  };
  // 글 선택 끝

  // updateForm 제출
  const update = async (e) => {
    e.preventDefault();

    const formResult = new FormData();

    // formData 객체에 state 값 추가하는 방식으로 진행
    formResult.append("selectedCategory", formData.selectedCategory);
    formResult.append("title", formData.title);
    formResult.append("content", formData.content);
    formResult.append("userId", formData.userId);

    if (formData.file) {
      formResult.append("file", formData.file);
    } else {
      formResult.append("file", null);
    }

    try {
      // FormData 객체는 그 자체로 전송
      const res = await axios.put(`/api/post/update/${postId}`, formResult, {
        headers: {
          "Content-Type": "multipart/form-data",
          charset: "utf-8",
        },
      });

      if (res.status === 200) {
        alert("글 수정 성공!!");
        // router.push("/");
      }
    } catch (error) {
      console.log("error = " + error);
      if (error.response) {
        alert(error.response.data.msg);
      }
    }
  };

  // updateForm 끝

  return (
    <form onSubmit={update}>
      <select
        className="w-full p-2 mt-3 border rounded-md"
        value={formData.selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">카테고리를 선택하세요</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category_name}
          </option>
        ))}
      </select>

      <input
        id="title"
        type="text"
        placeholder="제목을 입력하세요"
        className="w-full p-2 mt-3 border rounded-md"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      ></input>

      <div className="mb-10 mt-3" id="content">
        <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={(value) => setFormData({ ...formData, content: value })}
          modules={modules}
          style={{ height: "500px" }}
        />
        {/* <p>Editor Content: {value}</p> */}
      </div>
      <div>
        <input
          id="file"
          type="file"
          className="w-full p-2 mt-3 border rounded-md"
        ></input>
      </div>
      <button
        type="submit"
        className="w-1/12 bg-gray-400 hover:bg-teal-600 text-white p-2 rounded mt-4 mb-10"
      >
        등록
      </button>
    </form>
  );
}
