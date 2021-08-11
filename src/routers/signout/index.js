import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import { useHistory } from "react-router-dom";
function SignOutPage() {
    const dispatch = useDispatch();
    const { prevPath } = useSelector(state => state.guards);
    const { replace } = useHistory();
    useEffect(() => {
        dispatch({
            type: "GUARDS_PATH",
        })
        replace(prevPath ? prevPath : "/");
    }, [])
    

    return <div> 
    </div>
}

export default SignOutPage;