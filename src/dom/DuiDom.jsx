const DuiDom = () => {
  return (
    <>
      <b>&nbsp;&nbsp;SPA방식으로 만든 로그인과 게시글 작성이 가능한 블로그입니다. </b>
      권한을 가진 사용자만이 게시글을 작성하고 삭제할 수 있습니다.
      <br />
      <br />
      <span>&nbsp;&nbsp;클라이언트 사이드 렌더링</span>으로 만들면서 다른 렌더링 방식과 비교해,
      서로의 장단점을 알 수 있었습니다. 또한 REST API요청을 통해 <span>DB를 관리하고</span> JWT를
      사용해 쿠키를 관리해 <span>권한을 가진 사용자</span>만이 게시글과 댓글을 작성할 수 있도록
      만들어 봤습니다.
      <br />
      <br />
      &nbsp;&nbsp;그동안 이론으로만 알고 헷갈렸었던 <span>SSG, ISG, CSR, SSR</span> 네가지 렌더링
      방식의 차이점과 장단점을 명확히 알았고, DB와 쿠키를 관리하면서 CRUD가 가능한 하나의
      어플리케이션을 만드는 좋은 경험이었습니다.
    </>
  );
};

export default DuiDom;
