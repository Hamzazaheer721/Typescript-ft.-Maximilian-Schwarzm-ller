enum ICountryActions {
  PAKISTAN,
  INDIA,
  SOUTHASIA
}

type CityPakistan = 'karachi' | 'lahore' | 'peshawar' | 'quetta'
type CityIndia = 'mumbai' | 'delhi' | 'haryana' | 'hyderabad'
type CitySouthAsia = CityIndia & CityPakistan

interface IAddressPakistan {
  country: ICountryActions.PAKISTAN
  city: CityPakistan
  street: string
  state: string
}

interface IAddressIndia {
  country: ICountryActions.INDIA
  city: CityIndia
  street: string
  state: string
}

interface IAddressSouthAsia {
  country: ICountryActions.SOUTHASIA
  city: CitySouthAsia
  street: string
  state: string
}

interface IPerson {
  name: string
  age: number
}

interface ISouthAsianPerson extends IPerson, IAddressSouthAsia {}

interface Developer {}
