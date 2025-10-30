"use client";

import { useAdminContext } from "@/store/adminContext";
import { creditsCountsInitialState } from "../consts/creditsCountsInitialState";

export function useCreditsCount() {
  const {
    state: {
      credits: { data },
    },
  } = useAdminContext();

  const totalCount = data.length;
  const newCount = data.filter((credit) => credit.status === "NEW").length;
  const pendingCount = data.filter((credit) => credit.status === "PENDING").length;
  const forReviewCount = 0;
  const approvedCount = data.filter((credit) => credit.status === "APPROVED").length;
  const rejectedCount = data.filter((credit) => credit.status === "REJECTED").length;

  const creditsCounts = creditsCountsInitialState.map((item) => {
    switch (item.status) {
      case "ALL":
        return {
          ...item,
          count: totalCount,
        };
      case "NEW":
        return {
          ...item,
          count: newCount,
        };
      case "PENDING":
        return {
          ...item,
          count: pendingCount,
        };
      case "REVIEW":
        return {
          ...item,
          count: forReviewCount,
        };
      case "APPROVED":
        return {
          ...item,
          count: approvedCount,
        };
      case "REJECTED":
        return {
          ...item,
          count: rejectedCount,
        };
      default:
        return { ...item };
    }
  });

  return { creditsCounts };
}
