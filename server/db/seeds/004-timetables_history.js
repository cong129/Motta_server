/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('timetables_history').del();
  await knex('timetables_history').insert([
    { subject_id: 1, period: 1, date: '2023-12-18' },
    { subject_id: 3, period: 2, date: '2023-12-18' },
    { subject_id: 2, period: 3, date: '2023-12-18' },
    { subject_id: 6, period: 4, date: '2023-12-18' },
    { subject_id: 10, period: 5, date: '2023-12-18' },
    { subject_id: 10, period: 6, date: '2023-12-18' },
    { subject_id: 1, period: 1, date: '2023-12-19' },
    { subject_id: 2, period: 2, date: '2023-12-19' },
    { subject_id: 7, period: 3, date: '2023-12-19' },
    { subject_id: 7, period: 4, date: '2023-12-19' },
    { subject_id: 6, period: 5, date: '2023-12-19' },
    { subject_id: 1, period: 1, date: '2023-12-20' },
    { subject_id: 11, period: 2, date: '2023-12-20' },
    { subject_id: 2, period: 3, date: '2023-12-20' },
    { subject_id: 4, period: 4, date: '2023-12-20' },
    { subject_id: 9, period: 5, date: '2023-12-20' },
    { subject_id: 3, period: 6, date: '2023-12-20' },
  ]);

  // シーケンスのリセット（次に生成される値を1に設定）
  return knex
    .raw("SELECT setval('timetables_history_id_seq', 1, false)")
    .then(() => {
      console.log('timetables_historyのシーケンスをリセットしました');
    });
};
