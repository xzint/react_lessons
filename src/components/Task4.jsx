export function Task4() {
    const workersList2 = [
            {
                id: '111',
                name: 'Іванов',
                salary: 10000,
            },
            {
                id: '111',
                name: 'Петров',
                salary: 20000,
            },
            {
                id: '111',
                name: 'Сидоров',
                salary: 50000,
            },
        ];

        return (
        <section className='task4'>
            <h1>Task4</h1>
            {
                workersList2.map((worker, index) => (
                    <div key={index}>
                        <p><b>{worker.name}:</b> {worker.salary}</p>
                    </div>
                ))
            }
        </section>
    );
}
