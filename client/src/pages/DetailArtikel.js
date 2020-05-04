import React, { useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getArticleById,
  getArticles,
  loadArticleById,
} from "../store/articles";
import Loading from "../components/Loading";

const DetailArtikel = () => {
  const { id } = useParams();
  const article = useSelector(getArticleById(id));
  const { loading, message } = useSelector(getArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArticleById(id));
  }, [dispatch, id]);

  return (
    <div>
      <Header />

      {loading && <Loading />}
      {!loading && !article && <h3>Tidak Ada Artikel</h3>}
      {!loading && !message && (
        <div>
          <h1>{article?.title ?? "-"}</h1>
          <p>{article?.createdAt ?? "-"}</p>
          <p>Author: {article?.User?.username ?? "-"}</p>
          <div>
            <div />
            {
              // label.map((item, index) => (
              //   <Chip label={item} key={index} />
              // ))
            }
            <div>{article?.description ?? "-"}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailArtikel;
