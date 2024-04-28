export const TypeData: string[] = ["Container", "Bulk Carrier", "LNGC", "PCTC", "Passenger", "Naval"]

export const StepData: {
  title: string
  path: string
}[] = [
  {
    title: "Type",
    path: "/",
  },
  {
    title: "Information",
    path: "/informationStep",
  },
  {
    title: "Confirmation",
    path: "/confirmStep",
  },
  {
    title: "Registered",
    path: "/registeredStep",
  },
]
export type InfoType = {
  header: string
  name: string
  required: boolean
  placeHolder: string
  type: string
}
export const InfoData: InfoType[] = [
  {
    header: "Ship name",
    name: "shipName",
    required: false,
    placeHolder: "Avikus",
    type: "string",
  },
  {
    header: "Call sign",
    name: "callSign",
    required: false,
    placeHolder: "ABC1234",
    type: "string",
  },
  {
    header: "Length",
    name: "length",
    required: true,
    placeHolder: "399.0",
    type: "number",
  },
  {
    header: "Beam",
    name: "beam",
    required: true,
    placeHolder: "61.0",
    type: "number",
  },
  {
    header: "Draft",
    name: "draft",
    required: true,
    placeHolder: "15.0",
    type: "number",
  },
  {
    header: "Engine",
    name: "numOfEngines",
    required: true,
    placeHolder: "0",
    type: "number",
  },
]
