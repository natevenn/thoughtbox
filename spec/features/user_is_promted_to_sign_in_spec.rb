require 'rails_helper'

RSpec.feature 'Vistior can sign up' do
  scenario 'when a user visits / they are prompted to sign up or login' do
    visit '/'
    click_on 'Sign up'

    expect(current_path).to eq '/signup'

    fill_in 'email', with: 'test@email.com'
    fill_in 'password', with: 'password'
    find("input[placeholder='password confirmation']").set "password"
    click_on 'Signup'

    expect(current_path).to eq '/dashboard'
  end

end
