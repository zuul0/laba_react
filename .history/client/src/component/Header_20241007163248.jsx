patients.map((patient, index) => {
    console.log(`Patient ${index}:`, patient);
    return (
        <tr key={patient.PatientId || index}>
            <td>{index + 1}</td>
            <td>{patient.SurNamee}</td>
            <td>{patient.Namee}</td>
            <td>{patient.Patronymic}</td>
            <td>{patient.DateOfBirth ? new Date(patient.DateOfBirth).toLocaleDateString() : 'Не указано'}</td>
            <td>{patient.Gender}</td>
            <td>{patient.ContactInfo}</td>
            <td>{patient.Addresse}</td>
            <td>
                <button>Изменить</button>
                <button>Удалить</button>
            </td>
        </tr>
    );
});
