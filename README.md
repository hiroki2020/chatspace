## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|groups_id|integer|null: false, foreign_key: true|
|users_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## usersテーブル  

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|e-mail|string|null: false, add_index unique: true|
|Password|integer|null: false|
### Association
- has_many :groups_users
- has_many groups,through :groups_users
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :groups_users
- has_many :users,through: :groups_users
- has_many :messages
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|users_id|integer|foreign_key: true|
|groups_id|integer|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user