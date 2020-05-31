import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkIsLogin } from "../store/auth";
import { getConsultations, loadConsultations } from "../store/consultations";
import Loading from "./Loading";
import { Redirect } from "react-router-dom";
import { HOME } from "../constants/routes";
import ItemKonsultasi from "./ItemKonsultasi";

const ListKonsultasi = () => {
  const { list, loading, message } = useSelector(getConsultations);
  const dispatch = useDispatch();
  const isLogin = useSelector(checkIsLogin);

  useEffect(() => {
    if (isLogin) {
      dispatch(loadConsultations(""));
    }
  }, [dispatch, isLogin]);

  if (!isLogin) return <Redirect to={HOME} />;

  if (loading) return <Loading />;

  if (message) return <h3>{message}</h3>;

  return (
    <div>
      {!loading && !list.length && (
        <div>
          <hr />
          <h3>Tidak Ada Konsultasi</h3>
        </div>
      )}
      {!loading &&
        list.length &&
        list.map((item) => (
          <div key={item.id}>
            <ItemKonsultasi {...item} />
          </div>
        ))}
    </div>
  );
};

export default ListKonsultasi;
