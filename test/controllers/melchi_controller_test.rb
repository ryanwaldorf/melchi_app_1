require "test_helper"

class MelchiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get melchi_index_url
    assert_response :success
  end
end
