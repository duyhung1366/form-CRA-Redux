export const FCButton = (props: {
    text?: string,
    style?: any,
    className?: string,
    handleAction?: () => void
}) => {
    const { text, style, className, handleAction } = props
    return (
        <button className={className} style={style} onClick={handleAction}>{text}</button>
    )
}