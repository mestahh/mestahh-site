require 'aws-sdk-s3'


Aws.config = {
        :access_key_id => ENV["AWS_ACCESS_KEY_ID"],
        :secret_access_key => ENV["AWS_SECRET_ACCESS_KEY"],
        :region => 'eu-west-1'
    }
s3 = Aws::S3::Resource.new(region:'eu-west-1')
# system "ng build --prod --aot"
Dir["./dist/**"].each do |file|
	filename = File.basename(file)
	obj = s3.bucket('mestahh-site').object(filename)
	obj.upload_file(file)
end

