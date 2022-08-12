function Textarea(props) {
    return (
        <textarea {...props} className={"bg-rd-lowbright text-rt p-2 border border-rd-brighter rounded-md block " + props.className} />
    );
}

export default Textarea;