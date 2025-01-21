import styled from "@emotion/styled"
import TopBar from "./components/TopBar"
import SideMenu from "./components/SideMenu"

const MainContainer = styled('div')(() => ({
    display: 'flex',
    height: '100dvh',
    width: '100vw'
}))

const RightPanel = styled('div')(() => ({
    display: 'flex',
    height: '100dvh',
    flexGrow: 1
}))

const App: React.FunctionComponent = () => {
    return (
        <MainContainer>
            <SideMenu />
            <RightPanel>
                <TopBar />
            </RightPanel>
        </MainContainer>
    )
}

export default App