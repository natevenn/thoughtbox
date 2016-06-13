require 'rails_helper'

RSpec.describe 'LinksApi' do
  it 'returns a collection of all idesa' do
    user = User.create(email: 'test@email.com', password: 'password', password_confirmation: 'password')
    user.links.create(title: 'title1', url: 'http://title1.com')
    user.links.create(title: 'title2', url: 'http://title2.com')
    user.links.create(title: 'title3', url: 'http://title3.com')

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    get '/api/v1/links'

    expect(response.status).to eq 200

    body = JSON.parse(response.body)

    expect(body.count).to eq 3

    expect(body[0]['title']).to eq 'title1'
    expect(body[1]['title']).to eq 'title2'
    expect(body[2]['title']).to eq 'title3'
  end

  it 'creates and link' do
    user = User.create(id: 1, email: 'test@email.com', password: 'password', password_confirmation: 'password')
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    expect(Link.count).to eq 0

    post "/api/v1/links", { link: { title: "title1", url: 'http://title1'} }

    expect(Link.count).to eq 1
    expect(Link.first.title).to eq "title1"
  end

  it 'updates and idea' do
    user = User.create(id: 1, email: 'test@email.com', password: 'password', password_confirmation: 'password')
    user.links.create(title: 'title1', url: 'http://title1.com')

    expect(Link.first.title).to eq ('title1')
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    put "/api/v1/links/#{Link.first.id}", { link: { title: 'title2', url: 'http://title2.com' } }

    expect(Link.first.title).to eq ('title2')
  end

  it 'errors when url is invalid' do
    user = User.create(id: 1, email: 'test@email.com', password: 'password', password_confirmation: 'password')
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    expect(Link.count).to eq 0

    post "/api/v1/links", { link: { title: "title1", url: 'not a link'} }

    expect(response.status).to eq 422
  end
end
