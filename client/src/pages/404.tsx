import MessageWrapper from "../components/MessageWrapper";
import NavBar from "../components/Navbar";

export default function NotFound() {
  return(
    <>
      <NavBar>
        <></>
      </NavBar>
      <div style={{
        height: 'calc(100vh - 90px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <MessageWrapper title="404 - Page not found." message="Is the website URL correct? Please try another path.">
          Go back
        </MessageWrapper>
      </div>
    </>
  )
}