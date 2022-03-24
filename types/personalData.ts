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

export interface ILinks {
  name: string,
  href: string
}

export interface ISkills {
  name: string,
  href: string
}

export default interface IPersonalData {
  details: IDetails,
  links: ILinks[],
  skills: ISkills[],
  profile: string
  employmentHistory: IEmploymentHistory[],
  education: IEducation[],
}
