// These are the lists used in the application. You can move them to any component needed.
//
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const Filters = props => {
  const {emp, sal} = props

  return (
    <div>
      <h1>Type of Employment</h1>
      <ul>
        {employmentTypesList.map(i => (
          <li className="listItem" key={i.employmentTypeId}>
            <input
              id={i.employmentTypeId}
              type="checkbox"
              onChange={() => emp(i.employmentTypeId)}
            />
            <label htmlFor={i.employmentTypeId}>{i.label}</label>
          </li>
        ))}
      </ul>
      <h1>Salary Range</h1>
      <ul>
        {salaryRangesList.map(i => (
          <li className="listItem" key={i.salaryRangeId}>
            <input
              id={i.salaryRangeId}
              type="radio"
              name="salary"
              onChange={() => sal(i.salaryRangeId)}
            />
            <label htmlFor={i.salaryRangeId}>{i.label}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filters
