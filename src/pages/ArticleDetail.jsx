import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { articleMap } from '../data/articleRegistry';

const ArticleDetail = () => {
  const { articleId } = useParams();
  
  const SelectedArticle = articleMap[articleId.toLowerCase()];
  
  if (!SelectedArticle) {
    return <div>Article not found!</div>;
  }

  return (
    <div className="article-container">
      <Suspense fallback={<div>Loading Article Content...</div>}>
        <SelectedArticle />
      </Suspense>
    </div>
  );
};

export default ArticleDetail;