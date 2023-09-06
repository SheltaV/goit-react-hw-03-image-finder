import { Oval } from 'react-loader-spinner';
import { Spinner } from './Loader.styled'

export const Loader = () => {
    return (<Spinner>
<Oval
    height = "60"
    width = "60"
    color='#3f51b5'
    secondaryColor='#3f51b5'   
    visible={true}
        />
    </Spinner>)
}