// src/components/ReviewList.js
import React from 'react';
import ReviewHighlighter from './ReviewHighlighter';

const reviews = [
  {
    reviewer_name: "Barbara",
    content: "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your stay because you pay a lot to stay here already.",
    analytics: [
      {
        category: "spa",
        topic: "spa",
        sentences: ["The spa was excellent"],
        sentiment: "Positive",
        highlight_indices: [[40, 61, "Positive"]],
      },
      {
        category: "facilities",
        topic: "facilities",
        sentences: ["Parking should be included in your stay because you pay a lot to stay here already"],
        sentiment: "Negative",
        highlight_indices: [[155, 237, "Negative"]],
      },
    ],
  },
];

function ReviewList() {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <ReviewHighlighter key={index} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
