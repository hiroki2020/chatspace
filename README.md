## messageテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false|
|body|text|null: false|
|image|string|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :group

## userテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false|
|name|string|null: false|
|e-mail|string|null: false|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :groups_users
- has_many :message

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|string|null: false, foreign_key: true|

### Association
- belongs_to :group,:user

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :group,:user
