require 'rails_helper'

RSpec.feature 'User can logout' do
  scenario 'when a user visits / they are login and can see a logout link that logs them out and return to root' do
    user = User.create(email: 'test@email.com', password: 'password', password_confirmation: 'password')
    visit '/'

    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    find("input[placeholder='password confirmation']").set user.password_confirmation
    click_on 'Login'

    expect(current_path).to eq '/dashboard'
    expect(page).to have_content 'Logged in as test@email.com'
    click_on "Logout"
    expect(current_path).to eq '/'
  end

end

