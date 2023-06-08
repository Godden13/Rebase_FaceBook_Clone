import { FeedCards } from "@/Components/Organism";
import ProfilePicture from "../assets/images/persons/5.jpeg";

import Snoop from "../assets/images/persons/6.jpeg";

import {
  CommentInput,
  ProfilePis,
  ProfilePise,
  Submit__commentsbtn,
} from "@/Components/Atoms/Atoms";

interface feedProps {
  width: string;
  height: string;
}

import { MainPis, Timer, Xmark } from "@/Components/Atoms/Atoms";

import {
  FeedPost__wrapper,
  FeedPostTop,
  PostImg,
  PostTopLeft,
  FeedPost__action,
  Feedpost__message,
  FeedMainImg,
  FeedPost__bottom,
  PostBottom,
  Feed__multimedia,
  Multi__smallcontainers,
  Comment__set,
  CommentWrapper,
  Comment__inerr,
  Commented__post,
} from "@/Components/Molecules";

import Image from "next/image";

import {
  Globe,
  Dots,
  LikedPost,
  Comments,
  SharePost,
  Xmarker,
  Whappy,
  Whappys,
} from "@/Components/Atoms/IconAtoms";

import Liked from "../assets/images/like.png";
import Loved from "../assets/images/heart.png";
import { CSSProperties, useRef, useState } from "react";
import { Submit__comments } from "@/Components/Atoms/IconsAtoms";

interface ImgProps {
  width: any;
  height: any;
  style?: CSSProperties;
}

interface Todo {
  id: number;
  text: string;
}

function FeedCard() {
  const [comment, setComment] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef();
  const handleClick = () => {
    setComment((prev) => !prev);
  };

  const closeComment = () => {
    setComment(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue.trim(),
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <FeedCards>
      <FeedPost__wrapper>
        <FeedPostTop>
          <PostTopLeft>
            <PostImg>
              <Image
                src={ProfilePicture}
                alt="prof"
                style={ProfilePis}
                margin-rigth="22px"
                border-radius="50%"
              />
            </PostImg>
            <div>
              <p>Snoop Dog</p>
              <Timer>
                10h ago <Globe />
              </Timer>
            </div>
          </PostTopLeft>
          <FeedPost__action>
            <Dots />
            <Xmarker />
          </FeedPost__action>
        </FeedPostTop>
        <Feedpost__message>
          <p>Every moment is a fresh beginning.</p>
        </Feedpost__message>
        <FeedMainImg>
          <Image src={Snoop} alt="snoop" style={MainPis} />
        </FeedMainImg>
        <FeedPost__bottom>
          <PostBottom>
            <Image src={Liked} alt="gh" height={30} width={30} />
            <Image src={Loved} alt="gh" height={30} width={30} />
            <span>145</span>
          </PostBottom>
          <p>45 comments ...</p>
        </FeedPost__bottom>
        <Feed__multimedia>
          <Multi__smallcontainers>
            <p>
              <LikedPost />
              Like
            </p>
          </Multi__smallcontainers>
          <Multi__smallcontainers>
            <Comments onClick={handleClick} />
            <p onClick={handleClick}>Comments</p>
          </Multi__smallcontainers>
          <Multi__smallcontainers>
            <SharePost />
            <p>Share</p>
          </Multi__smallcontainers>
        </Feed__multimedia>

        {comment && (
          <Comment__set>
            <Comment__inerr>
              <Image
                src={ProfilePicture}
                alt="prof"
                style={ProfilePise}
                margin-rigth="22px"
                border-radius="50%"
              />

              <CommentWrapper>
                <Whappys />
                <CommentInput
                  type="text"
                  placeholder="Write a public here comment"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </CommentWrapper>
              <Submit__commentsbtn onClick={handleAddTodo}>
                <Submit__comments />
              </Submit__commentsbtn>
            </Comment__inerr>
            <Commented__post>
              {todos.map((todo) => (
                <p key={todo.id}>
                  {todo.text}
                  <button onClick={() => handleRemoveTodo(todo.id)}>x</button>
                </p>
              ))}
            </Commented__post>
          </Comment__set>
        )}
      </FeedPost__wrapper>
    </FeedCards>
  );
}

export default FeedCard;
