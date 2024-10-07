import React, { useState } from 'react';
import { getAll } from '../api/books'; 

export const Headerqwe = () => {
    const [patients, setPatients] = useState([]); 
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getAll(); 
            console.log("Полученные данные:", data);

            if (!Array.isArray(data)) {
                console.error("Expected an array but got:", data);
                setPatients([]); // Clear data if it's not an array
            } else {
                setPatients(data); // Set data if it's an array
            }
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
            setPatients([]); // Clear data on error
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Лабораторная работа №2. Инструментальные средства разработки программного обеспечения</h1>
            <button onClick={fetchData}>Получить данные</button>
            {loading && <p>Загрузка...</p>}
            {!loading && patients.length === 0 && <p>Нет данных для отображения.</p>}
            {patients.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Дата рождения</th>
                            <th>Пол</th>
                            <th>Контактная информация</th>
                            <th>Адрес</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
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
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
