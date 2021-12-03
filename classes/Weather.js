class Weather {
    constructor(city) {
    this.city = city
    this.key = "4c9f7b8ced99c03a5db8192a1fa6a1ac"
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
}