
export interface TextProps {
    content: string | JSX.Element;
}

export const Text: React.FC<TextProps> = ({content}) => {
    return <span>{content}</span>
}

export default Text