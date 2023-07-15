//푸터, 전체 등수칸으로
import "../css/Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="f-logo">&copy; Korea in the Earth</div>
      <div
        onClick={() => (window.location.href = "/grade")}
        className="grade-box"
      >
        점수판
      </div>
    </div>
  );
}

export default Footer;
