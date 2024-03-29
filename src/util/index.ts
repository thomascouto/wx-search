import { WEATHER_ICON } from './constants';

const isDay = () => new Date().getUTCHours() < 20;

export function getIcon(weatherCondition: WeatherCondition) {
  let wxSuffix = '';

  if (weatherCondition === 'Clouds' || weatherCondition === 'Clear') {
    wxSuffix = isDay() ? 'Day' : 'Night';
  }

  return WEATHER_ICON[weatherCondition.concat(wxSuffix)];
}
