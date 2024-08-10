// src/components/ReviewHighlighter.js
import React from 'react';

function ReviewHighlighter({ review }) {
  const { content, analytics } = review;
  
  function highlightText(content, analytics) {
    let highlightedContent = content;

    analytics.forEach(({ sentences, sentiment }) => {
      sentences.forEach(sentence => {
        const sentimentColor = getSentimentColor(sentiment);
        highlightedContent = highlightedContent.replace(
          sentence,
          `<span style="background-color: ${sentimentColor}">${sentence}</span>`
        );
      });
    });

    return highlightedContent;
  }

  function getSentimentColor(sentiment) {
    switch(sentiment) {
      case "Positive":
        return "#D9F2DD";
      case "Negative":
        return "#F2DBD9";
      case "Mixed":
        return "#e8bd6d3d";
      case "Neutral":
        return "#eaf09b6b";
      default:
        return "transparent";
    }
  }

  return (
    <div className="review">
      <p dangerouslySetInnerHTML={{ __html: highlightText(content, analytics) }}></p>
    </div>
  );
}

export default ReviewHighlighter;
