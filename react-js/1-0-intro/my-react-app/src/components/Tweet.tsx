type TweetProps = {
    text: string;
    // text?: string; -> deixar como opcional
}


export function Tweet( props: TweetProps ) {
    return(
        <p>{props.text}</p>
    );
}
