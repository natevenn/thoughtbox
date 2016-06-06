require 'rails_helper'

RSpec.feature 'Vistior can login' do
  scenario 'when a user visits / they are prompted to' do
    user = User.create(email: 'test@email.com', password: 'password', password_confirmation: 'password')
    visit '/'

    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    find("input[placeholder='password confirmation']").set user.password_confirmation
    click_on 'Login'

    expect(current_path).to eq '/dashboard'
    expect(page).to have_content 'Logged in as test@email.com'
  end

end
