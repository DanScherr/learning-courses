import spinner from './assets/spinner.gif'

export default function Spinner(params) {
    return (
        <div className='w-100 mt-20'>
            <img width={180} className='text-center mx-auto' src={spinner} alt="Loading..." />
        </div>
    )
}