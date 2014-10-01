get '/' do
  erb :index
end

get '/first' do
  '2'
end

get '/first.json' do
  content_type :json
  { value: 2 }.to_json
end

get '/second' do
  '5'
end

get '/second.json' do
  content_type :json
  { value: 5 }.to_json
end
