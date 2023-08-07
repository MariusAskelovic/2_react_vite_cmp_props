function Weather(props) {
    // oras gali buti  ['lyja', 'saule', 'debesuota']
    const dabartinisOras = props.condition;
    return <div>
        <h2>Orai</h2>
        {dabartinisOras === 'lyja' && <div>
            <h3>Lyja</h3>
            <img src="/img/oras/rain.jpg" alt="rain" />
        </div>}
        {dabartinisOras === 'saule' && <div>
            <h3>Sviecia Saule</h3>
            <img src="/img/oras/sun.jpg" alt="sun" />
        </div>}
        {dabartinisOras === 'debesuota' && <div>
            <h3>Debesuota</h3>
            <img src="/img/oras/cloud.jpg" alt="cloud" />
        </div>}
    </div>
}

export default Weather;