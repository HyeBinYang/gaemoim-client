import { User } from "./user";

export interface Post {
  language: string[];
  isDeleted?: boolean;
  isClosed: false;
  views: number;
  likes: string[];
  totalLikes: number;
  startDate: string;
  endDate: null | string;
  type: "1" | "2";
  recruits: string;
  onlineOrOffline: "on" | "off";
  contactType: "gf" | "ok" | "em";
  contactPoint?: string;
  expectedPeriod: string;
  positions: string[];
  closeDate?: null | string;
  deleteDate?: null | string;
  _id: string;
  title: string;
  content?: string;
  author: User;
  comments: Comment[];
  createdAt: string;
  updatedAt?: string;
  state: "new" | "deadline" | "";
  totalComments: number;
  id: string;
  isLiked: boolean;
}

export interface Comment {
  _id: string;
  content: string;
  author: User;
  updatedAt: string;
  createdAt: string;
  replies: Comment;
  id: string;
}
