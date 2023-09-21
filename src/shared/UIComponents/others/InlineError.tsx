import styled from "styled-components"


const Inline = styled.span`
    color:red;
    padding:2px 0;
    font-size:12px;
`

const InlineError = ({ children, show = false }: { children: string, show?: boolean }) => {
    if (!show) {
        return null
    }

    return (
        <Inline>
            {children}
        </Inline>
    )
}

export default InlineError