namespace :create_test_user do
  desc "てすと用のユーザーとカード作成"
    task :create => :environment do
      User.create(
      name: "test", 
      first_name: "てすと", 
      family_name: "てすと", 
      first_name_kana: "テスト", 
      family_name_kana: "テスト",
      birth_day: "20190101",
      phone_num: "09000000000",
      email: "test@test",
      password: "1234test"
    )
    User.create(
      name: "buyer", 
      first_name: "てすと", 
      family_name: "てすと", 
      first_name_kana: "テスト", 
      family_name_kana: "テスト",
      birth_day: "20190101",
      phone_num: "09000000000",
      email: "test@buyer",
      password: "1234buyer"
    )
    require 'payjp'
    Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
    card_token = Payjp::Token.create({
                    :card => {
                      :number => '4242424242424242',
                      :cvc => '123',
                      :exp_month => '2',
                      :exp_year => '2020'
                    }},
                    {
                      'X-Payjp-Direct-Token-Generate': 'true'
                    } 
                  )
    customer = Payjp::Customer.create(
      card: card_token[:id],
      metadata: {user_id: 2})
      @card = Card.create(user_id: 2, customer_id: customer.id, card_id: customer.default_card)
    end
end
