interface WeatherAvatarProps {
    date: string;
    Temperature: number;
    Location: string;
}

export default function WeatherAvatar(props: WeatherAvatarProps) {
    const { date, Temperature, Location } = props;

    return (
        <div className='py-6 flex items-center justify-center'>
            <img src="https://images.unsplash.com/photo-1517495306984-f84210f9daa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className='rounded-full w-52 h-52 relative' />
            <div className='absolute'>
                <div className='font-chakra text-white text-4xl text-center py-2'>{Location}</div>
                <div className='font-chakra text-white text-xl text-center py-2'>{Temperature}°</div>
                <div className='text-white text-lg text-center'>{new Date(date).toLocaleDateString()} {new Date(date).getHours()} : {new Date(date).getMinutes()}</div>
            </div>
        </div>
    )
}