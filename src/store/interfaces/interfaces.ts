export interface initialState {
  weather: dailyForecast;
  current_condition: Array<currentCondition>;
  request: Array<request>;
  time_zone: Array<string>;
  pending: boolean;
  city: string;
  userLocation: boolean;
  suggestions: Array<string>;
  showSuggestions: boolean;
  type: string;
}
export interface currentCondition {
  isdaytime?: string;
  weatherCode?: string;
  temp_C?: string;
  weatherDesc?: [];
}
export interface request {
  type?: string;
  query?: string;
}
export interface suggestion {
  display_name: string;
}

export interface dailyForecast extends currentCondition {
  maxtempC?: string;
  hourly: Array<hourlyForecast>;
}

export interface hourlyForecast extends currentCondition {
  chanceofrain: string;
  windspeedKmph: string;
  time: string;
}
