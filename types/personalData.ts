export interface IDetails {
  avatar: string
  jobTitle: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface IEducation {
  school: string
  degree: string
  date: string
  city: string
  description: string
}

export interface IEmploymentHistory {
  jobTitle: string
  employer: string
  date: string
  city: string
  description: string
}

export default interface IPersonalData {
  details: IDetails,
  links: {
    name: string,
    href: string
  }[],
  skills: {
    name: string,
    level: string
  }[],
  profile: string
  employmentHistory: IEmploymentHistory[],
  education: IEducation[],
}
