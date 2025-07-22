import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const goToMain = useNavigate();
  alert("잘못된 접근입니다.");
  return goToMain("/");

  // 미완성
}

export default ErrorPage;
