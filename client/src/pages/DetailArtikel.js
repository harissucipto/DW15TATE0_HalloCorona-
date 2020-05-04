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
import { pink } from "@material-ui/core/colors";
import { Card, CardContent } from "@material-ui/core";

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
      <hr />

      <div className="sub-rumah">
        {loading && <Loading />}
        {!loading && !article && <h3>Tidak Ada Artikel</h3>}
        {!loading && !message && (
          <div>
            <h1>{article?.title ?? "-"}</h1>
            <p style={{ marginBottom: "0" }}>{article?.createdAt ?? "-"}</p>
            <p style={{ marginTop: "0", marginBottom: "2em" }}>
              {" "}
              Author:{" "}
              <span style={{ color: pink[200] }}>
                {article?.User?.username ?? "-"}
              </span>
            </p>
            <Card>
              <CardContent style={{ margin: "2em" }}>
                <div
                  style={{
                    backgroundColor: pink[200],
                    width: "100%",
                    height: "40em",
                    marginBottom: "2em",
                  }}
                />
                <div>{article?.description ?? "-"}</div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailArtikel;
