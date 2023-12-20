/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del();
  await knex('items').insert([
    { item_name: 'エプロン' },
    { item_name: 'ランチョンマット' },
    { item_name: '箸入れ' },
    { item_name: '筆箱' },
  ]);

  // シーケンスのリセット（次に生成される値を1に設定）
  return knex.raw("SELECT setval('items_id_seq', 1, false)").then(() => {
    console.log('itemsのシーケンスをリセットしました');
  });
};
