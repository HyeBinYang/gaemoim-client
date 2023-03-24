import { User } from "./user";

export interface Post {
  language: string[];
  isClosed: false;
  views: number;
  likes: string[];
  totalLikes: number;
  startDate: string;
  endDate: null | string;
  type: "1";
  recruits: string;
  onlineOrOffline: "on" | "off";
  contactType: "gf" | "ok" | "em";
  expectedPeriod: string;
  positions: string[];
  _id: string;
  title: string;
  author: User;
  comments: Comment[];
  createdAt: string;
  state: "new" | "deadline" | "";
  totalComments: number;
  id: string;
  isLiked: boolean;
}

export interface Comment {
  _id: string;
  content: string;
  author: string;
  updatedAt: string;
  createdAt: string;
  replies: Comment;
  id: string;
}
