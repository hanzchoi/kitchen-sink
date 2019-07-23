require 'sinatra'
require 'sequel'

set :port, ENV['PORT']
DB = Sequel.connect(ENV['DATABASE_URL'])

get '/' do
  s = "sinatra version: #{Sinatra::VERSION}<br>\n"
  s += "postgres version: #{DB.fetch("SELECT VERSION()").first[:version]}\n"
  return s
end
