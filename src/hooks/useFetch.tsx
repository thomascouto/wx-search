import { useState } from 'react';

import { getWeatherService } from '@/services';

export default function useFetch() {
  const [weather, setWeather] = useState<WX>();
  const [error, setError] = useState<ErrorResponse>();
  const [isLoading, setIsLoading] = useState(false);

  const getWeatherData = (q: string) => {
    setIsLoading(true);
    getWeatherService({
      q,
    })
      .then(setWeather)
      .catch((err: string) => {
        const parsedError = JSON.parse(err) as ErrorResponse;
        setError(parsedError);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    getWeatherData,
    weather,
    isLoading,
    error,
  };
}
