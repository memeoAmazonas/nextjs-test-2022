const { useRouter } = require("next/router");
const { useDispatch } = require("react-redux");
const { setActive } = require("store/slice/header");

const OnNavigate = (label, to) =>{
const router = useRouter();
const dispatch = useDispatch();

const onSend = () => {
    router.push(to);
    dispatch(setActive(label))
}
 return { onSend }

 
}
export default OnNavigate;